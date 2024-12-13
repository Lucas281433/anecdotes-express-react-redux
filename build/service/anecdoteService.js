"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("../data/data"));
const uuid_1 = require("uuid");
const getAll = () => {
    return data_1.default;
};
const create = (anecdote) => {
    const andote = {
        content: anecdote.content,
        id: (0, uuid_1.v1)(),
        votes: 0,
    };
    data_1.default.push(andote);
    return andote;
};
const update = (id) => {
    const anecdoteToUpdate = data_1.default.find((a) => a.id === id);
    if (!anecdoteToUpdate) {
        throw new Error("Anecdote not found");
    }
    ;
    const updatedAnecdote = Object.assign(Object.assign({}, anecdoteToUpdate), { votes: anecdoteToUpdate.votes + 1 });
    const index = data_1.default.findIndex((a) => a.id === id);
    data_1.default[index] = updatedAnecdote;
    return data_1.default;
};
exports.default = { getAll, create, update };
