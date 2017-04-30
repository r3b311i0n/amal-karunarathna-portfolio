import * as React from 'react';
import './tag.css';

const Tag = (tagName: string) => {
    switch (tagName) {
        case 'drugs':
            return (
                <div className="tag-root yellow">
                    {tagName}
                </div>
            );
        case 'meth':
            return (
                <div className="tag-root orange">
                    {tagName}
                </div>
            );
        case 'poverty':
            return (
                <div className="tag-root turquoise">
                    {tagName}
                </div>
            );
        case 'white trash':
            return (
                <div className="tag-root purple">
                    {tagName}
                </div>
            );
        default:
            return (
                <div className="tag-root">
                    {tagName}
                </div>
            );
    }
};

export default Tag;
