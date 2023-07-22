"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgrounColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("../../components/MyLabel");
var meta = {
    title: 'UI/Labels/MyLabel',
    component: MyLabel_1.MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontWeight: { control: 'radio' },
        fontColor: { control: 'color' }
    },
};
exports.default = meta;
exports.Basic = {
    args: {
        size: 'normal',
        allCaps: false,
    },
};
exports.AllCaps = {
    args: {
        size: 'normal',
        allCaps: true
    },
};
exports.Secondary = {
    args: {
        size: 'normal',
        color: 'secondary'
    },
};
exports.Tertiary = {
    args: {
        size: 'normal',
        color: 'tertiary' // primary | secondary | tertiary
    },
};
exports.CustomFontColor = {
    args: {
        size: 'h1',
        fontColor: '#5517ac'
    },
};
exports.CustomBackgrounColor = {
    args: {
        size: 'h1',
        fontColor: '#fff',
        backgroundColor: '#000'
    },
};
