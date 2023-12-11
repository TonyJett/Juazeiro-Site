document.addEventListener('DOMContentLoaded', function () {
        var valorantCheckbox = document.getElementById('valorant');
        var masculinoCheckbox = document.getElementById('masculino');

        // Adicione um ouvinte de eventos para detectar cliques no campo "Valorant"
        valorantCheckbox.addEventListener('click', function () {
            // Desmarca o campo "Masculino" se "Valorant" estiver marcado
            masculinoCheckbox.checked = false;
        });

        // Adicione um ouvinte de eventos para detectar cliques no campo "Masculino"
        masculinoCheckbox.addEventListener('click', function () {
            // Desmarca o campo "Valorant" se "Masculino" estiver marcado
            valorantCheckbox.checked = false;
        });
    });
