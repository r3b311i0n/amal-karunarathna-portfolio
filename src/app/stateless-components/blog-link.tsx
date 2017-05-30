import * as React from 'react';
import './blog-link.pcss';
import Tag from './tag';

const BlogLink = (articleName: string, tags: string[]) =>
    (
        <div className="blog-link-root">
            <span className="blog-link-article-name">
                {articleName}
            </span>
            <div className="blog-link-tags">
                {
                    tags.map((value: string) => (
                        Tag(value.trim())
                    ))
                }
            </div>
        </div>
    )
;

export default BlogLink;
