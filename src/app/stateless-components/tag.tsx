import * as React from 'react';
import './tag.css';

const Tag = (tagName: string) => {
    switch (tagName) {
        case 'drugs':
            return (
                <div className="tag-root yellow" key={tagName}>
                    {tagName}
                </div>
            );
        case 'meth':
            return (
                <div className="tag-root orange" key={tagName}>
                    {tagName}
                </div>
            );
        case 'poverty':
            return (
                <div className="tag-root turquoise" key={tagName}>
                    {tagName}
                </div>
            );
        case 'white trash':
            return (
                <div className="tag-root purple" key={tagName}>
                    {tagName}
                </div>
            );
        default:
            return (
                <div className="tag-root" key={tagName}>
                    {tagName}
                </div>
            );
    }
};

export default Tag;
