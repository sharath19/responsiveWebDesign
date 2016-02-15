jQuery("document").ready(function(){
    var filterByPrice = function(value){
        jQuery(".product-rate").each(function(){
            var select = jQuery(this).data("price");
            switch (value) {
                case '0':
                    if(!select<500){
                        jQuery(this).parent().hide(2000);
                    }
                    break;
                case '1':
                    if(!(select>500 && select<1000)){
                        jQuery(this).parent().hide(2000);
                    }
                    break;
                case '2':
                    if(!(select>1000 && select<2000)){
                        jQuery(this).parent().hide(2000);
                    }
                    break;
                case '3':
                    if(!(select>2000)){
                        jQuery(this).parent().hide(2000);
                    }
                    break;
                    default:
                        jQuery(".product-rate").each(function(){
                           jQuery(this).parent().show(2000); 
                        });
                        break;
            }
        });
    }
    $('#numbers').change(function(){ 
    var value= $(this).val()
    jQuery(".product-rate").each(function(){
       jQuery(this).parent().show(2000); 
    });
      filterByPrice(value);
    });
});