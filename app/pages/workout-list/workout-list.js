var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var WorkoutList = (function () {
    function WorkoutList(nav) {
        this.nav = nav;
        this.notes = [];
    }
    WorkoutList.prototype.addNote = function () {
        var _this = this;
        var prompt = ionic_angular_1.Alert.create({
            title: 'Add Note',
            inputs: [{
                    name: 'title'
                }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        _this.notes.push(data);
                    }
                }
            ]
        });
        this.nav.present(prompt);
    };
    WorkoutList.prototype.editNote = function (note) {
        var _this = this;
        var prompt = ionic_angular_1.Alert.create({
            title: 'Edit Note',
            inputs: [{
                    name: 'title'
                }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var index = _this.notes.indexOf(note);
                        if (index > -1) {
                            _this.notes[index] = data;
                        }
                    }
                }
            ]
        });
        this.nav.present(prompt);
    };
    WorkoutList.prototype.deleteNote = function (note) {
        var index = this.notes.indexOf(note);
        if (index > -1) {
            this.notes.splice(index, 1);
        }
    };
    WorkoutList = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/workout-list/workout-list.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], WorkoutList);
    return WorkoutList;
})();
exports.WorkoutList = WorkoutList;
