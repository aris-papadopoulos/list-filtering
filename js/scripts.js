$(document).ready(function () {

    var checkboxes = $(':checkbox').length;
    var listItemsLength = $('li[data-category]').length;

    console.log('asd', checkboxes, listItemsLength);

    $(':checkbox').change(function() {

        filterSelected = [];
        
        for (i=0; i<checkboxes; i++) {
            var checked =  $(':checkbox').eq(i).prop('checked');
            
            if (checked == true) {
                
                var filterName = $(':checkbox').eq(i).val();
                filterSelected.push(filterName);
            } 
        }

        console.log('check', filterSelected);
        
        for (j=0; j<listItemsLength; j++) {
            var listItem = $('li[data-category]').eq(j);
            var listItemData = listItem.data('category').split(" ");
            var varSome = [];
            for (k=0; k<filterSelected.length; k++) {
        
                varSome[k] = listItemData.some(function(item, index, array){
                    return item == filterSelected[k];
                });
            }
        
            console.log('varSome', varSome);
        
            varEvery = varSome.every(function(item, index, array) {
                return item == true;

            })

            if (varEvery == true) {
                listItem.removeClass('filterOut');
            }
            else {
                listItem.addClass('filterOut');
            }
            console.log('varEvery', varEvery);
        }
    }); 
});
