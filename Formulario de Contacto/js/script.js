$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p>Escribir tu nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
            $('#textNombre').css("color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "rgb(87, 86, 86)")
            $('#textNombre').css("color", "rgb(0, 0, 0)")
        }

        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Ingresar tu correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
            $('#textEmail').css("color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "rgb(87, 86, 86)")
            $('#textEmail').css("color", "rgb(0, 0, 0)")
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escribir tu mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
            $('#textMensaje').css("color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "rgb(87, 86, 86)")
            $('#textMensaje').css("color", "rgb(0, 0, 0)")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap" id="ventanaModal">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>No olvides:</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        $("#enviaText").css("color", "#F14B4B")
   

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });

        $('#ventanaModal').click(function(){
            $('.modal_wrap').remove();
        });

        
    });

});
