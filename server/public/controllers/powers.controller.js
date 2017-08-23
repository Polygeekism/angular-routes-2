app.controller('PowersController', ['PowersService', function(PowersService){
    var self = this;
    PowersService.getPowers();
    self.powers = PowersService.powers;
    
}])