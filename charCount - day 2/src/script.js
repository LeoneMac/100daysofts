"use strict";
//DON'T MESS WITH THE JAVASCRIPT CODE! IT'S READONLY! YOU SHOULD USE THE TYPESCRIPT FILE
class TextAreaHandler {
    constructor(textAreaId) {
        this.textarea = document.getElementById(textAreaId);
        if (!this.textarea) {
            console.warn(`Textarea ${textAreaId} not found. Script initialization skipped for one or more classes
            who inherit TextAreaHandler`);
            return;
        }
        this.setupEventListener();
    }
    setupEventListener() {
        throw new Error('Method was not implemented in a subclass');
    }
}
class CharCounter extends TextAreaHandler {
    setupEventListener() {
        this.textarea.addEventListener("input", this.countCharacters.bind(this));
    }
    countCharacters() {
        let words = this.textarea.value;
        let characters = 0;
        while (words.length > characters) {
            characters++;
        }
        let spanTextCounter = document.getElementById("txtCounter");
        if (!spanTextCounter)
            throw new Error("Span not found");
        if (characters > 0 && characters == 1) {
            spanTextCounter.classList.add("visible");
            spanTextCounter.innerText = `You typed ${characters} character`;
        }
        else if (characters > 1)
            spanTextCounter.innerText = `You typed ${characters} characters`;
        else {
            spanTextCounter.classList.remove("visible");
        }
    }
}
class TextAreaLimit extends TextAreaHandler {
    setupEventListener() {
        this.textarea.addEventListener("input", this.limitLines.bind(this));
    }
    limitLines() {
        let lines = this.textarea.value.split("\n");
        if (lines.length > 8)
            this.textarea.value = lines.slice(0, 8).join("\n");
    }
}
class ShadowBox extends TextAreaHandler {
    setupEventListener() {
        this.textarea.addEventListener("focus", this.addShadow.bind(this));
        this.textarea.addEventListener("focusout", this.removeShadow.bind(this));
    }
    addShadow() {
        this.textarea.classList.add("shadow");
    }
    removeShadow() {
        this.textarea.classList.remove("shadow");
    }
}
const charCounter = new CharCounter("txtArea");
const textAreaLimit = new TextAreaLimit("txtArea");
const shadowBox = new ShadowBox("txtArea");
