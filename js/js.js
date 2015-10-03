var app = angular.module('priphoto', []);
app.controller('albumcontroller', ['$scope', '$interval', '$animate',
    function($scope, $interval) {

        $scope.albums = [{
            position: './resources/img/1.jpg',
            active: true,
            id : 1
        }, {
            position: './resources/img/2.jpg',
            active: false,
            id : 2
        }, {
            position: './resources/img/3.jpg',
            active: false,
            id : 3
        }, {
            position: './resources/img/4.jpg',
            active: false,
            id : 4
        }];
        //console.log(albums[0]['position']);

        //not used any more 
        $scope.goLeft = function() {

            return false;
        };
        $scope.uploadfile = function() {
           // debugger;
           var file = document.getElementsByClassName('fileupload-dialog');
           // angular.element(file).addClass('active');
           console.log($scope.showfileuploadingdialog);
        }
        //not used any more 
        $scope.goRight = function() {
            return false;
        };

        $scope.doSth = function() {
            console.log(this.sth);
        };
        $scope.showTooltip = function(id, event) {
           // debugger;
           var thisSpan = event.target;//document.querySelector('span#viewalbumspan' + id);
            //debugger;
           $scope.show = true;
           //angular.element(thisSpan).css('display', 'block');
                //var x = element. 
            //    console.log(element);
        }
         $scope.notshowTooltip = function(id, event) {
           var thisSpan = event.target;//document.querySelector('span#viewalbumspan' + id);
            //debugger;
           //angular.element(thisSpan).css('display', 'none');
                //var x = element. 
            //    console.log(element);
           $scope.show = false;
        }
    
        //for iterate $scope.album
        var i = 0;
        //set time interval 
        $interval(function() {

            if ($scope.albums[i]['active'] === true) {
                $scope.albums[i]['active'] = false;
                i++;
                if (i === 4) {
                    i = 0
                };
                $scope.albums[i]['active'] = true;
            }

        }, 3000)
    }
]);

$(document).ready(function() {
    var tooltipspan = $(".tooltipped-text");
    $("a[target='_self']").mouseover(function(e) {
        // tooltipspan.css('top', e.clientY + 20 + 'px');
        // tooltipspan.css('left', e.clientX + 20 + 'px');
        //console.log($(this));
        //console.log(this);
    });

});

function passfunction(e) {
    console.log(e);
}


$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});

