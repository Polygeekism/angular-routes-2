app.service('PowersService', ['$http', function ($http) {
    var self = this;
    self.powers = {}
    self.getPowers = function(){
        $http({
            method: 'GET',
            url: '/powers'
        }).then(function(response){
            console.log(response.data);
            self.powers = response.data;
            //console.log(this.powers);
        })
    }
}])