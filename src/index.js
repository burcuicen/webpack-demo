console.log("HELLO WORLD")
alert("HELLO WORLD")
import "./main.css";

//importing everything manually to run all of the scripts for webpack
import { run } from "./app/app";
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);