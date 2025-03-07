$(document).ready(function() {
    console.log("Featherlight Demo Loaded!");

    $("a[data-featherlight]").on("click", function() {
        console.log("Featherlight modal triggered for:", $(this).attr("href"));
    });
});