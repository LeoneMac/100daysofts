//DON'T MESS WITH THE JAVASCRIPT CODE! IT'S READONLY! YOU SHOULD USE THE TYPESCRIPT FILE
class TextAreaHandler {
    protected textarea: HTMLTextAreaElement;

    constructor(textAreaId: string) {
        this.textarea = document.getElementById(textAreaId) as HTMLTextAreaElement;
        if (!this.textarea) {
            console.warn(`Textarea ${textAreaId} not found. Script initialization skipped for one or more classes
            who inherit TextAreaHandler`);
            return;
        }

        this.setupEventListener();
    }
    protected setupEventListener(): void {
        throw new Error('Method was not implemented in a subclass');
    }
}

class CharCounter extends TextAreaHandler {
    protected setupEventListener() {
        this.textarea.addEventListener("input", this.countCharacters.bind(this));
    }

    private countCharacters(): void {
        let words: string | null = this.textarea.value;
        let characters: number = 0;
        while (words.length > characters){
            characters++;
        }
        let spanTextCounter: HTMLSpanElement | null = document.getElementById("txtCounter");
        if (!spanTextCounter)
            throw new Error("Span not found");

        if (characters > 0 && characters == 1) {
            spanTextCounter.classList.add("visible");
            spanTextCounter.innerText = `You typed ${characters} character`;
        }
        else if (characters > 1)
            spanTextCounter.innerText = `You typed ${characters} characters`;
        else { spanTextCounter.classList.remove("visible"); }
    }
}

class TextAreaLimit extends TextAreaHandler {
    protected setupEventListener(): void {
        this.textarea.addEventListener("input", this.limitLines.bind(this));
    }
    private limitLines(): void {
        let lines: string[] = this.textarea.value.split("\n");

        if (lines.length > 8)
            this.textarea.value = lines.slice(0, 8).join("\n");
    }
}
const charCounter: CharCounter = new CharCounter("txtArea");
const textAreaLimit: TextAreaLimit = new TextAreaLimit("txtAea");
