$(document).ready(function () {

    var checkboxes = $(':checkbox').length;
    var listItemsLength = $('li[data-category]').length;
    // Get Number of checkboxes and list items that exist on the document.

    console.log('asd', checkboxes, listItemsLength);

    $('[type=checkbox]').change(function() {

        filterSelected = [];

        for (i=0; i<checkboxes; i++) {
            var checked =  $(':checkbox').eq(i).prop('checked');
            
            if (checked == true) {
                
                var filterName = $(':checkbox').eq(i).val();
                filterSelected.push(filterName);
            } 
        }
        // Create an array with the values of the checkboxes that are checked, every time we make a change.

        console.log('check', filterSelected);
        
        for (j=0; j<listItemsLength; j++) {
            var listItem = $('li[data-category]').eq(j);
            var listItemData = listItem.data('category').split(" ");
            // Get the categories of the list item and put them in an array.

            var varSome = [];
            for (k=0; k<filterSelected.length; k++) {
        
                varSome[k] = listItemData.some(function(item, index, array){
                    return item == filterSelected[k];
                });
                /*  Compare the array of the current list item with the array of the filters, return
                    true or false for each element and put them in a new array.
                */
            }
        
            console.log('varSome', varSome);
        
            varEvery = varSome.every(function(item, index, array) {
                return item == true;
            })
            /*  Applies a short of "AND" logic. If All of the categories selected by the filters
                existed in the list item, it returns a true value.
            */

            if (varEvery == true) {
                listItem.removeClass('filterOut');
            }
            else {
                listItem.addClass('filterOut');
            }
            // Apply class for each element.
            console.log('varEvery', varEvery);
        }
    }); 
});
