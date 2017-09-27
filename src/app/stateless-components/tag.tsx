import * as React from 'react';
import './tag.pcss';

const Tag = (tagName: string) => {
    switch (tagName) {
        case 'C#':
            return (
                <div className="tag-root c-sharp" key={tagName}>
                    {tagName}
                </div>
            );
        case 'CSS':
            return (
                <div className="tag-root css" key={tagName}>
                    {tagName}
                </div>
            );
        case 'Design':
            return (
                <div className="tag-root design" key={tagName}>
                    {tagName}
                </div>
            );
        case 'Java':
            return (
                <div className="tag-root java" key={tagName}>
                    {tagName}{'\u0020'}🍵
                </div>
            );
        case 'JavaScript':
            return (
                <div className="tag-root javascript" key={tagName}>
                    {tagName}
                </div>
            );
        case 'Preact':
            return (
                <div className="tag-root preact" key={tagName}>
                    {tagName}
                </div>
            );
        case 'Python':
            return (
                <div className="tag-root python" key={tagName}>
                    {tagName}{'\u0020'}🐍
                </div>
            );
        case 'React':
            return (
                <div className="tag-root react" key={tagName}>
                    {tagName}{'\u0020'}⚛
                </div>
            );
        case 'TypeScript':
            return (
                <div className="tag-root typescript" key={tagName}>
                    {tagName}
                </div>
            );
        case 'Typography':
            return (
                <div className="tag-root typography" key={tagName}>
                    {tagName}{'\u0020'}ℱ
                </div>
            );
        case 'Web':
            return (
                <div className="tag-root web" key={tagName}>
                    {tagName}{'\u0020'}🌐
                </div>
            );
        default:
            return (
                <div className="tag-root misc" key={tagName}>
                    {tagName}
                </div>
            );
    }
};

export default Tag;
