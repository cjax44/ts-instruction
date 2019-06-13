"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stuffy_class_1 = require("./model/stuffy.class");
var StuffyService = /** @class */ (function () {
    function StuffyService() {
        this.stuffies = [];
        this.nextId = 1;
    }
    StuffyService.prototype.initializeList = function () {
        //initialize 
        var s1 = new stuffy_class_1.Stuffy(1, "Dog", "Red", "X-Large", 4);
        var s2 = new stuffy_class_1.Stuffy(2, "Cow", "Orange", "Medium", 4);
        var s3 = new stuffy_class_1.Stuffy(3, "Dragon", "Purlpe", "Medium", 6);
        var s4 = new stuffy_class_1.Stuffy(4, "Mantis Shrimp", "Rainbow", "X-Small", 12);
        var s5 = new stuffy_class_1.Stuffy(5, "Octopus", "Pink", "Large", 8);
        this.stuffies = [s1, s2, s3, s4, s5];
    };
    StuffyService.prototype.listStuffies = function () {
        this.stuffies.forEach(function (s) {
            console.log(s.about());
        });
    };
    StuffyService.prototype.getStuffy = function (id) {
        // instead of using optionals in stuffy constructor on stuffy.class I used a generic default of 0
        var stuffy = new stuffy_class_1.Stuffy(0, "na", "na", "na", 0);
        this.stuffies.forEach(function (s) {
            if (s.id == id) {
                stuffy = s;
            }
        });
        if (stuffy.id == 0) {
            console.log("No stuffy found for ID: " + id);
        }
        else {
            console.log("Found your stuffy: " + stuffy.about());
        }
    };
    StuffyService.prototype.addStuffy = function (newStuffy) {
        this.stuffies.push(newStuffy);
    };
    StuffyService.prototype.removeByID = function (id) {
        var _this = this;
        console.log("Remove a stuffy...");
        this.stuffies.forEach(function (s) {
            if (s.id == id) {
                var idx = _this.stuffies.indexOf(s);
                _this.stuffies.splice(idx, 1);
            }
        });
    };
    return StuffyService;
}());
exports.StuffyService = StuffyService;
