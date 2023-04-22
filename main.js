$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const newTask = $('#task_to_do').val();
        const newIten = $('<li></li>')
        $(`
            <div class="overlay_task">
                <a href="#">
                    ${newTask}
                </a>
            </div>
        `).appendTo(newIten);
        $(newIten).appendTo('ul');
        $('#task_to_do').val('');

        $('a').click(function () {
            $(this).css('text-decoration', 'line-through');
        });
    })
})