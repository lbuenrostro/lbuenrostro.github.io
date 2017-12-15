function establishButtonHandlers() {
    $('#Auto-btn').click(function() {
        $('#Graduation-div').hide(450);
        $('#Base-div').hide(450);
        $('#Contact-div').hide(500);
        $('#Programming-div').hide(450);
        $('#ProjectsVideos-div').hide(450);
        $('#ModifiedGames-div').hide(450);
        $('#Websites-div').hide(450);
        $('#Auto-div').show(500);
    });

    $('#Graduation-btn').click(function() {
        $('#Auto-div').hide(450);
        $('#Base-div').hide(450);
        $('#Contact-div').hide(500);
        $('#Programming-div').hide(450);
        $('#ProjectsVideos-div').hide(450);
        $('#ModifiedGames-div').hide(450);
        $('#Websites-div').hide(450);
        $('#Graduation-div').show(500);
    });

    $('#Base-btn').click(function() {
        $('#Auto-div').hide(450);
        $('#Graduation-div').hide(450);
        $('#Contact-div').hide(500);
        $('#Programming-div').hide(450);
        $('#ProjectsVideos-div').hide(450);
        $('#ModifiedGames-div').hide(450);
        $('#Websites-div').hide(450);
        $('#Base-div').show(500);
    });

    $('#Contact-btn').click(function() {
        $('#Auto-div').hide(450);
        $('#Graduation-div').hide(450);
        $('#Base-div').hide(450);
        $('#Programming-div').hide(450);
        $('#ProjectsVideos-div').hide(450);
        $('#ModifiedGames-div').hide(450);
        $('#Websites-div').hide(450);
        $('#Contact-div').show(500);
    });

    $('#Programming-btn').click(function() {
        $('#Auto-div').hide(450);
        $('#Graduation-div').hide(450);
        $('#Base-div').hide(450);
        $('#Contact-div').hide(450);
        $('#ProjectsVideos-div').hide(450);
        $('#ModifiedGames-div').hide(450);
        $('#Websites-div').hide(450);
        $('#Programming-div').show(500);
    });

    $('#ProjectsVideos-btn').click(function() {
        $('#Auto-div').hide(450);
        $('#Graduation-div').hide(450);
        $('#Base-div').hide(450);
        $('#Contact-div').hide(450);
        $('#Programming-div').hide(450);
        $('#ModifiedGames-div').hide(450);
        $('#Websites-div').hide(450);
        $('#ProjectsVideos-div').show(500);
    });

    $('#ModifiedGames-btn').click(function() {
        $('#Auto-div').hide(450);
        $('#Graduation-div').hide(450);
        $('#Base-div').hide(450);
        $('#Contact-div').hide(450);
        $('#Programming-div').hide(450);
        $('#ProjectsVideos-div').hide(450);
        $('#Websites-div').hide(450);
        $('#ModifiedGames-div').show(500);
    });

    $('#Websites-btn').click(function() {
        $('#Auto-div').hide(450);
        $('#Graduation-div').hide(450);
        $('#Base-div').hide(450);
        $('#Contact-div').hide(450);
        $('#Programming-div').hide(450);
        $('#ProjectsVideos-div').hide(450);
        $('#ModifiedGames-div').hide(450);
        $('#Websites-div').show(500);
    });
}

function main() {
    // loadButtons();
    establishButtonHandlers();
}

$(main);
