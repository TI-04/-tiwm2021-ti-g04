$(document).ready(function() {
    $(".content_panel").each(function() {
        $(this).prepend('<div class="hide_panel">[esconder]</div><div class="show_panel">[mostrar]</div>');
    });

    $(".hide_panel").click(function() {
        $(this).siblings('ul').hide(100, function() {
            $(this).parent().addClass('minimizedPanel');
        });
    });
    $(".show_panel").click(function() {
        $(this).siblings('ul').show(100, function() {
            $(this).parent().removeClass('minimizedPanel');
        });
    });

    $(".hide_panel").click(function() {
        $(this).siblings('ol').hide(100, function() {
            $(this).parent().addClass('minimizedPanel');
        });
    });
    $(".show_panel").click(function() {
        $(this).siblings('ol').show(100, function() {
            $(this).parent().removeClass('minimizedPanel');
        });
    });

    id_to_hover.onmouseenter = function() {
        this.classList.add('hovered_rep');
    }

    id_to_hover.onmouseleave = function() {
        setTimeout(function() {
            this.classList.remove('hovered_rep');
        }.bind(this), 500)
    }


});