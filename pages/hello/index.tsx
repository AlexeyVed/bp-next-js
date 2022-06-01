// REF: https://mdxjs.com/getting-started#working-with-components

import Content from "../../content/hello.mdx";

import NavButton from '../../components/UI/NavButton'

const components = {
    NavButton
};

export default () => <Content components={components} />;
