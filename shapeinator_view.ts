import { ShapeinatorModel } from "./shapeinator_model";

export class ShapeinatorView {

    #model: ShapeinatorModel

    constructor(model: ShapeinatorModel) {
        this.#model = model;
    }

}