import * as React from 'react';
import './tag.pcss';

const Tag = (tagName: string) => {
    switch (tagName) {
        case 'TypeScript':
            return (
                <div className="tag-root blue" key={tagName}>
                    {tagName}
                </div>
            );
        case 'Java':
            return (
                <div className="tag-root red" key={tagName}>
                    {tagName}
                </div>
            );
        case 'Web':
            return (
                <div className="tag-root green" key={tagName}>
                    {tagName}
                </div>
            );
        case 'JavaScript':
            return (
                <div className="tag-root yellow" key={tagName}>
                    {tagName}
                </div>
            );
        case 'C#':
            return (
                <div className="tag-root purple" key={tagName}>
                    {tagName}
                </div>
            );
        default:
            return (
                <div className="tag-root white" key={tagName}>
                    {tagName}
                </div>
            );
    }
};

export default Tag;
