import { ShapeinatorController } from "./shapeinator_controller";
import { ShapeinatorModel } from "./shapeinator_model";
import { ShapeinatorView } from "./shapeinator_view";

let model = new ShapeinatorModel();
let view = new ShapeinatorView(model);
let controller = new ShapeinatorController(model, view);