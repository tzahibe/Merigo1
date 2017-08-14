var myApp = angular.module('myApp', ['angular-carousel']);

myApp.controller('FormCtrl', ['$scope',
    function ($scope) {
        var self = this;
        $scope.user = {};
        $scope.slides3 = [
            { id: 1, img: '/Content/images/leket2_61161_0.png', text: 'אתר נחיתה למד"א'},
            { id: 2, img: "/Content/images/mda2_61167_0.png", text: "אתר מדרשת"},
            { id: 3, img: "/Content/images/midreshet2_61165_0.png", text: "אתר נטבוק" },
            { id: 4, img: "/Content/images/netbook2_61166_0.png", text: "אתר סטודנטים לאונ' הפתוחה"},
            { id: 5, img: "/Content/images/Screenshot_1.png", text: "כולל חזון עובדיה" },
        ];
   
    console.log($scope.slides3);
    self.init = function () {
       
    }

    $scope.submit = function () {
        $scope.formSubmitted = true;
    }

    self.init();
}]);