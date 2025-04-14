export class ShapeinatorView {

    private mainCanvas: HTMLElement | null;
    private formImageUpload: HTMLElement | null;

    constructor() {
        
        this.mainCanvas = document.getElementById("main-canvas");
        this.formImageUpload = document.getElementById("form-image-upload");

    }

}