import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';

import {fetchColorService as mockFetch} from '../services/fetchColorService';

jest.mock("../services/fetchColorService")

const colors = {
    data: [
        {
            color: "aliceblue",
            code: {
                hex: "#f0f8ff",
            },
            id: 1,
        },
        {
            color: "limegreen",
            code: {
                hex: "#99ddbc",
            },
            id: 2,
        },
        {
            color: "aqua",
            code: {
                hex: "#00ffff",
            },
            id: 3,
        },
        {
            color: "aquamarine",
            code: {
                hex: "#7fffd4",
            },
            id: 4,
        },
        {
            color: "lilac",
            code: {
                hex: "#9a99dd",
            },
            id: 5,
        },
    ]
}


test("Renders without errors", ()=> {
    
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
});