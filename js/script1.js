jQuery(document).ready(function(){

    
    $.ajaxSetup({
      headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
  });

  
  $('#submit').click(function() {// function to run when clicking on submit
      
    var $this = $(this); //setting variables
    var hasError = false;
    var block = $this.parents('.form');
    var letters = /^[A-Za-z]+$/;
    var cardNum=$('#cardNum').val();
    var cardHolder=$('#cardHolder').val();
    var expDM=$('#expDM').val();
    var expDY=$('#expDY').val();
    var code=$('#code').val();
    var mon=$('#mon').val();
    var cur=$('#cur').val();
    var lastDigit2Str = String(cardNum).slice(-1); 
    var lastDigit2Num = Number(lastDigit2Str); 
    
    var expiryDate = new Date('20'+expDY ,expDM-1);
    console.log(expiryDate);    
    
    var saveCard=false;
    var save=$('#save');
  

    console.log(cardNum);
      $(".validate-error").remove();

    console.log(cardNum.toString().length);
      if (save.is(":checked")) {//input id
        saveCard=true;
        
       
      }
    
      if (block.find('#cardNum')) {//input id
        
        if (cardNum== '') {//coniditon
         
          //name fo label to appendd the error message
          $('#cardNumError').append('<div class="validate-error">This field is required</div>');//error message
          hasError = true;
         
        }
        else  if (cardNum.toString().length !=16 ) {
          $('#cardNumError').append('<div class="validate-error">The card number should be 16 digits</div>');
            hasError = true;
            
        }
      }
      if (block.find('#cardHolder')) {//input id
        
        if (cardHolder == '') {//coniditon
         
          //name fo label to appendd the error message
          $('#cardHolderEr').append('<div class="validate-error">This field is required</div>');//error message
          hasError = true;
         
        }
        else  if (!cardHolder.match(letters)) {
          $('#cardHolderEr').append('<div class="validate-error">The Card Holder Name should only contain letters </div>');
            hasError = true;
            
        }
      
      }
      if (block.find('#expDM' )&& block.find('#expDY')) {//input id

        
        if (expDM == '' || expDY == '') {//coniditon
         
          //name fo label to appendd the error message
          $('#expDEr').append('<div class="validate-error">This field is required</div>');//error message
          hasError = true;
         
        }
        
        else if (new Date()> expiryDate){
          //too late
          $('#expDEr').append('<div class="validate-error">Expiry month and year cannot be blank/Expiry month and year is before today month and year.</div>');
          hasError = true;
        }
      
      
      }

      
      if (block.find('#code')) {//input id
        
        if ( code == '') {//coniditon
         
          //name fo label to appendd the error message
          $('#codeEr').append('<div class="validate-error">This field is required</div>');//error message
          hasError = true;
         
        }
        else if (code.toString().length != 3) {
          $('#codeEr').append('<div class="validate-error">Card Code is incorrect, please enter the correct code</div>');
            hasError = true;
            
        }
        
      
      }

      if (block.find('#mon')) {//input id
        console.log('money',mon);        
        if ( mon == '') {//coniditon
         
          //name fo label to appendd the error message
          $('#monEr').append('<div class="validate-error">This field is required</div>');//error message
          hasError = true;
         
        }
        else if (mon > 1000){
          $('#monEr').append('<div class="validate-error">Amount must be between 0.01 and 1000 </div>');
          hasError = true;
          console.log('s');  
         
            
        }
        else if(mon < 0.01) {
        $('#monEr').append('<div class="validate-error">Amount must be between 0.01 and 1000 </div>');
          hasError = true;
        }
        
      
      }   
     
      if( hasError == false){
        let amount={
          'mon':mon,
          'cur':cur
          }
      
        
        $.post("http://localhost/j/test/conversion.php",amount, function(status,data){
          if(lastDigit2Num == 7) {
            $('#succ').val("Payment Failed");
          }
          else{
            $('#succ').val("Payment Success");
          
          }
          $('#txtarea').val(status+" OMR");
        });
        
        $('#form')[0].reset();
        if(saveCard==true){
          let data={
            'cardNum':cardNum,
            'cardHolder':cardHolder,
            'expDM':expDM,
            'expDY':expDY,
            'code':code
          }
          
          
          $.post("http://localhost/j/test/index.php",data, function(status,data){
            alert(status+" Your card details have been saved");
                         
          });
         
        }

      }

});

});