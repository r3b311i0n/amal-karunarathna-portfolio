import * as React from 'react';
import './blog-link.css';
import Tag from './tag';

const BlogLink = (articleName: string, tags: string[]) =>
    (
        <div>
        <span>
            {articleName}
        </span>
            <div className="blog-link-tags">
                {
                    tags.map((value: string) => (
                        Tag(value)
                    ))
                }
            </div>
        </div>
    )
;

export default BlogLink;
