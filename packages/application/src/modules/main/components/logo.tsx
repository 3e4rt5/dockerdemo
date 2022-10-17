import React from 'react';
import { Link } from 'react-router-dom';

/* tslint:disable: max-line-length */
export const Logo: React.FC<{ to?: string }> = ({ to }) => (
    <Link to={to ?? '/'}>
        <svg width="162" viewBox="0 0 322 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M102.9 34.5c-1-.6-3.6-1.8-5.9-1.8-2 0-3.4.8-3.4 2.3 0 1.1.7 2 3.5 2.8.6.2 1.3.4 1.9.6 2.5.8 4.3 1.9 5.4 3.3 1.1 1.4 1.7 3.2 1.7 5.4 0 6.3-4.4 9.7-11.5 9.7-3.9 0-7.3-1.3-10-3.3l2.6-6.1c1.1 1 4.5 3 7.5 3 2.3 0 3.6-1.1 3.6-2.6 0-1.7-1.1-2.4-4-3.4-1-.3-2.5-.8-3.5-1.2-2.8-1.1-5-3.6-5-7.9 0-5.2 4.3-8.9 10.7-8.9 3.6 0 7 1.1 8.6 2.2l-2.2 5.9zm11.4 12.9c0 3 1.9 4.5 4.1 4.5 1.5 0 2.6-.6 3.3-1.9h6.3c-.8 3.7-4.2 6.8-9.7 6.8-7.4 0-11.2-4.6-11.2-10.7 0-6.2 4.5-10.5 10.8-10.5 6.8 0 10.6 4 10.6 10v1.8h-14.2zm7.8-4c-.2-1-.6-3.2-3.8-3.2-2.8 0-3.5 2.2-3.7 3.2h7.5zm79.1 4c0 3 1.9 4.5 4.1 4.5 1.5 0 2.6-.6 3.3-1.9h6.3c-.8 3.7-4.2 6.8-9.7 6.8-7.4 0-11.2-4.6-11.2-10.7 0-6.2 4.5-10.5 10.8-10.5 6.8 0 10.6 4 10.6 10v1.8h-14.2zm7.7-4c-.2-1-.6-3.2-3.8-3.2-2.8 0-3.5 2.2-3.7 3.2h7.5zm-78.4-7h6.8v3.1h.2c1.6-2.8 2.9-3.6 5.1-3.6 1 0 1.8.4 2 .4v6.4c-.7-.4-1.5-.7-2.6-.7-2.4 0-4.5 2.2-4.5 5.9v8.2h-7V36.4z" />
            <path d="M150.4 36.4l4.7 10.1 4.8-10.1h7.8l-10.3 19.8h-4.7l-10.2-19.8h7.9zm17-6.7c0-.5.1-1 .3-1.5.2-.5.5-.9.8-1.3.4-.4.8-.6 1.3-.8.5-.2 1-.3 1.5-.3s1 .1 1.5.3c.5.2.9.5 1.3.8.4.4.6.8.8 1.3.2.5.3 1 .3 1.5s-.1 1-.3 1.5c-.2.5-.5.9-.8 1.3-.4.4-.8.6-1.3.8-.5.2-1 .3-1.5.3s-1-.1-1.5-.3c-.5-.2-.9-.5-1.3-.8s-.6-.8-.8-1.3c-.2-.5-.3-1-.3-1.5zm.5 6.7h7v19.8h-7zm25 6.4c-1.2-.8-2.8-1.2-4.1-1.2-2.8 0-4.8 1.9-4.8 4.8 0 2.8 2 4.7 4.8 4.7 1.3 0 2.9-.4 4.1-1.4v5.9c-.7.5-2.6 1.1-4.9 1.1-6.8 0-11.2-4-11.2-10.4s4.5-10.6 11.4-10.6c1.7 0 3.3.4 4.7 1.1v6zm36.2-9.3v22.7h-7.6V33.5h-6.2v-6.4h20v6.4h-6.2zm7.1-3.8c0-.5.1-1 .3-1.5.2-.5.5-.9.8-1.3.4-.4.8-.6 1.3-.8.5-.2 1-.3 1.5-.3s1 .1 1.5.3c.5.2.9.5 1.3.8.4.4.6.8.8 1.3.2.5.3 1 .3 1.5s-.1 1-.3 1.5c-.2.5-.5.9-.8 1.3-.4.4-.8.6-1.3.8-.5.2-1 .3-1.5.3s-1-.1-1.5-.3c-.5-.2-.9-.5-1.3-.8s-.6-.8-.8-1.3c-.2-.5-.3-1-.3-1.5zm.5 6.7h7v19.8h-7zm18.7 5.8v14h-7v-14h-2.7v-5.8h2.7v-5.9h7v5.9h3.5v5.8h-3.5zm29.1-5.8h7V40c1-1.8 3.4-4 6.3-4 1.4 0 2.6.2 3.6.7 1 .5 1.8 1.1 2.5 1.9.6.7 1 1.4 1.2 2.2.2.8.3 1.8.3 2.8v12.6h-7v-10c0-1-.1-1.8-.2-2.4-.1-.6-.4-1.1-.8-1.4-.3-.3-.7-.5-1-.7-.4-.1-.8-.2-1.2-.2-1.2 0-3.7 1.2-3.7 4.5v10.1h-7V36.4zm25.4-3.5c.5 0 1.1.1 1.6.4.5.3.9.7 1.2 1.2.3.5.4 1.1.4 1.6 0 .6-.1 1.1-.4 1.6s-.7.9-1.2 1.2-1.1.4-1.6.4-1.1-.1-1.6-.4-.9-.7-1.2-1.2c-.3-.5-.4-1.1-.4-1.6 0-.6.1-1.1.4-1.6s.7-.9 1.2-1.2c.5-.2 1-.4 1.6-.4zm0 .6c-.5 0-.9.1-1.3.4-.4.2-.8.6-1 1-.2.4-.4.9-.4 1.4 0 .5.1.9.4 1.3s.6.8 1 1 .9.4 1.3.4.9-.1 1.3-.4.8-.6 1-1 .4-.9.4-1.3c0-.5-.1-.9-.4-1.4-.2-.4-.6-.8-1-1-.4-.3-.9-.4-1.3-.4zm-1.5 4.5v-3.5h1.2c.4 0 .7 0 .9.1s.3.2.4.3c.1.2.2.3.2.5 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3.1.1.2.1.3.2.1.1.3.4.5.7l.4.7h-.7l-.3-.6c-.2-.4-.4-.7-.6-.8-.1-.1-.3-.1-.5-.1h-.2V38h-.6zm.6-2h.7c.3 0 .6 0 .7-.1.1-.1.2-.2.2-.4 0-.1 0-.2-.1-.3l-.2-.2c-.1 0-.3-.1-.6-.1h-.7V36zm-34.3.4h7v19.8h-7v-2.4c-1.5 1.9-3.3 2.9-5.8 2.9-5.7 0-9.9-4.4-9.9-10.5 0-6 4.1-10.3 9.8-10.3 2.5 0 4.3 1 5.9 2.7v-2.2zm-8.6 9.8c0 2.6 1.8 4.6 4.4 4.6 2.9 0 4.5-2.1 4.5-4.5 0-2.3-1.6-4.5-4.5-4.5-2.6 0-4.4 1.8-4.4 4.4zM18.3 60s2.9 1.3 2.9 2.6c0 0-.2 1-1.2 1s-2.3-1.7-2.3-2.6c0-.9.6-1 .6-1zm-3.4-15.2c0-.1-.1-.1-.1-.1h-.2c-1 .4-1.6 1.4-1.5 2.5 0 5.5 14.4 6.1 22.3 15.9.8 1.1 2.1 1.7 3.5 1.7 1.8 0 3.5-.1 5.1-.4.2 0 .3-.2.4-.3.1-.2.1-.4-.1-.5-9.5-14-27.7-10.8-29.4-18.8zm56.2-19c-.6-1.2-1.5-2.1-3.1-2.5-1.6-.4-3.1-.2-4.1.7l-3.3-1.1c-.3-.7-.6-1.5-.9-2.2-.2-.5-.6-1-1.1-1.3-2.2-1.2-8-4.2-10.2-1.2 0 0-.1.1-.3.4l-.7-.2c-.4-1.4-1.6-2.4-3.3-2.8-1-.3-2-.2-2.9.1-.6.2-.6.9 0 1.2l2.6.9c.6.2.9.9.7 1.5-.2.6-.8.9-1.4.7 0 0-1.7-.5-2.8-.9-.6-.2-1.2.4-1 1 .4 1.3 1.6 2.4 3.3 2.8 1.4.4 2.8.1 3.7-.6l.6.2c0 1.5 1.1 3.2 2.2 3.8 1.6.9 3 .1 4.7-.7 0 0 4.1 3.3 2.2 12.8-5.3.6-7.2 2.5-9.1 4.4-1.2-.5-4.8-.7-6.8-.3.5-.6 1.4-1.2 2.6-1.7.5-.2.8-.7.8-1.2 0 0 2.4-.8 2.4-1.7s-3-.8-4.2-7.3c-.2-.8-.4-1.4-1.6-1.9 0 0-.3-.7.1-1.4.5-.7.7-1.1.6-1.7-.1-.6-1-1.1-1-1.1v-1s-2.4-1.8-2.4-4.4 3.3-5.7 4.3-6.6c.1-.1.1-.1.1-.2s-.1-.1-.1-.2c-2.1-1.4-4.5-2.1-7-2-14.1 0-17.3 12.7-20.3 19-.1.1-.1.3 0 .4 3 6.1 7.8 5.6 8.1 10.7.2 4.1-.7 4.2-1.7 4.1-.6-.1-1.5-.6-2.1-1-.1-.1-.2 0-.3 0-.1.1-.1.2-.1.2.4 1.1 1.4 3.4 4.5 3.4 1.6 0 2-1.5 2-2.8v-4.6c0-.5-.1-.9-.4-1.2-1.1-.9-3.3-3.2-3.3-5.2 0-.8.6-1.3 1.2-1.3 1.2 0 2.4 1.9 3.3 4.2.2.6.5.9.8 1.1h.1s.1-.1 0-.1c-.4-1.4-.5-2.8-.5-3.5 0-.3-.1-.5-.3-.7-.9-.8-3.4-3.3-3.4-6.9 0-5 7.8-4.5 9.4-4.4.5 1.7 1.5 2.4 2.1 2.7-2.4.9-7.7 2.6-7.7 5.7 0 3.3 5.3 3 5.3 3s-.8 6.5 5.2 8.5c0 0-.9 1-4.2 1-3 0-4.5-1.4-5.2-3 0-.1-.1-.1-.2-.1s-.1 0-.2.1c-.2.4-.3 1.2.3 2.1.9 1.5 2 2.3 2 4.2 0 1.4-1.2 2.2-1.7 2.5 0 0-.1.1 0 .1 0 0 0 .1.1.1 1.2.3 6.6 1.7 10.2 3.4h.1c.4-.3 3.5-2.3 3.7-5.1 0 0 .2-1.8-2.4-2.1 0 0 1.1-.5 3.2-.5 2 0 4.3 1.7.3 10.1v.1c.6.4 5.2 3.4 8.2 6.3.1.1.2.1.3.1.1 0 .2-.1.2-.1.4-.5 1.1-1.9 1.7-5.2 0-.3.3-.6.6-.7 1.8-.5 7.8-2.5 10.4-6.2 3.1-4.3 4.2-4.8 4.2-4.8s2-1.1 1.2-4.2c-.4-1.6-2.8-5.8-5.1-10 .5.4 1.2.7 1.9.9 1.4.4 2.8.1 3.8-.5.2-.1.3-.4.3-.7 0-.3-.2-.5-.4-.6l-2.6-.9c-.6-.2-1-.9-.7-1.6.2-.6.9-1 1.5-.8l2.3.8c.2.1.5 0 .7-.2 0 .5.1.2 0-.1zm-27.6-3.2c-2.2 0-3.2-1.9-3.2-1.9s2.6 2.5 6.1.5c0-.1-.6 1.4-2.9 1.4zm-2.6 9.7s.9 3.9 2.7 5.3c0 0-.1.4-.6.4s-1.6-.9-2-3c-.6-2.1-.1-2.7-.1-2.7zm-7.1-12c-.1 0-.2-.1-.2-.2-.4-2.9.9-6.4.9-6.4s-3 2.5-2.9 6.4c-2.6-.1-6.4.2-8.6 2.1-3.1 2.7-3.6 7.8-3.7 9.1 0 .1 0 .1-.1.2H19c-.7-.5-2.5-1.9-1.2-5.4 1.5-4.4 6.3-13.5 15.9-14.1 0 0 2.9-.1 4.9.9.1 0 .1.1.1.2s0 .1-.1.2c-.8.7-3.4 3-4.3 6.8 0 .1-.1.2-.2.2h-.3zm-.9 11.4c-3.6.7-4.9-.5-4.9-1.4 0-2.9 8.1-5.1 10.4-5.1.5.7-.3.6-.7 1.7-.3 1.1-1.1 1.4-2.3 1.6-1.2.2-2.3.7-3.2 1.5-.7.7 0 1 1.5.6 1.4-.4 1.6.2 2.2 0 .6-.2.1-.9.3-1.1.4-.2 1.2.3 1.2.3l2.1 1.3-2.5 1.3c-.2.1-.4.2-.4.6 0 .5 1.3.3 1.7.3.4 0 .5.7.5.7-.7.8-2.4.8-2.4.8.4.8 2.6.7 3 .7.4 0 .5.7.7 1.7.2 1 1.7 1.5 1.7 1.5.5 1.5-1.4 2-2.6 2-7-.1-6.3-9-6.3-9zM57.8 24l5 1.6s.9 1.8-.9 1.2c-1.9-.5-3.7-1.1-3.7-1.1s-1-.6-.4-1.7zm-4.7.2c-1.1-.1-.3-2-1.1-2.1-.3 0-.4 2.1-.8 1.8-.7-.6-.2-2-.1-2.6.1-.6.4-1.4-.3-.9s-1 1.5-1.2 2.3c-.2.8.2 1.2.5 2.2.3 1-.3.6-.3.6-3.1-1.9-.8-5.8-.8-5.8 1.3-2.3 3.3-1.6 3.3-1.6.4.1.5.4.5.9s.1.7.7.8c.6.1.8.8.8 2 0 1-.7 2.4-1.2 2.4zm2.5 0s-.8-.2-.5-1.3c.1-.4.2-.4.2-1s.2-1.3.6-1.5c0 0 .8 0 .8 2.2 0 .8-1.1 1.6-1.1 1.6zm0 19.2s-2 3.9-4.7 3.9c-1.1 0-1.9-.8-1.9-1.9 0-1.1 1.4-5.1 7.2-5.1 1.4 0 2.5.3 2.5 1.1s-1.4 2.3-3.1 2zM66 39.1s-.3 2.3-3.1 2.3c-2.7 0-5.2-4-6.1-13 .7 1.1 1.4 2.1 1.9 3.3 0-1.3.6-3.4-2.2-5.6 0 0 7.4 1.6 7.6 9.3 0 1.3-.8 2.7-1.3 3.2 0 0-.3.3-.1.7.2.4.7.3 1.4-.1.8-.5 1.9-1.3 1.9-.1zm.7-9.3s-1.9.5-3.9-1.6c0 0 .8.1 1-1 0 0 1.1 2.2 2.9 2.6zM18 54.4c3.7 2.2 11.9 4.7 13.6 9.3 0 0 .6 1-2.6 1-2.4 0-3.1-.6-4.8-2.7-2.5-3.1-7.6-4.9-7.6-7.2 0 0 0-1.2 1.4-.4z" />
        </svg>
    </Link>
);