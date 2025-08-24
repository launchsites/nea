type htmlTag =
    | 'a'
    | 'article'
    | 'body'
    | 'br'
    | 'button'
    | 'div'
    | 'footer'
    | 'form'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'head'
    | 'header'
    | 'html'
    | 'img'
    | 'input'
    | 'label'
    | 'li'
    | 'nav'
    | 'option'
    | 'script'
    | 'section'
    | 'span'
    | 'style'
    | 'title';

interface Component {
    type: htmlTag;
    id: string
    selfClosing: boolean;
    acceptsChildren: boolean;
    attributes?: Record<string, string>;
    styles?: Record<string, string>;
    children?: Component[];

}

