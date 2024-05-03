new Freezeframe();

        document.addEventListener("DOMContentLoaded", function(event) {
            new Freezeframe();
        });

        document.addEventListener("DOMContentLoaded", function(event) {
            const e = new Freezeframe();
            document.getElementById("#play-gif").addEventListener("click", function() {
                e.start()
            });
            document.getElementById("#stop-gif").addEventListener("click", function() {
                e.stop()
            });
        });