import { ShapeinatorModel } from "./shapeinator_model";
import { ShapeinatorView } from "./shapeinator_view";

export class ShapeinatorController {

    #model: ShapeinatorModel
    #view: ShapeinatorView

    constructor(model: ShapeinatorModel, view: ShapeinatorView) {
        this.#model = model;
        this.#view = view;
    }

}