tinymce.init({
    selector: '#mytextarea',
    plugins: 'lists pagebreak table toc visualblocks',
    toolbar: [
        'undo redo | formatselect | bold italic | removeformat | bullist | image | pagebreak | table',
        'alignleft aligncenter alignright alignnone',
    ],
    block_formats: 'Text=p; Section header=h1; Title=h2; Header 3=h3',
    style_formats: [
        {title: 'Text', inline: 'p'},
        {title: 'Section header', inline: 'h1'},
        {title: 'Title', inline: 'h2'},
        {title: 'Orange', inline: 'span', styles: {color: '#ff8800'}}
    ],
    visualblocks_default_state: true
})


