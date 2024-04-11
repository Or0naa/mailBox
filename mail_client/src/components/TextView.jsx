import React from 'react';
import ReactQuill from 'react-quill';

export default function TextView({ message }) {
    return (
        <div dir="auto" >
            <ReactQuill value={message} readOnly theme="bubble"  />
        </div>
    );
}