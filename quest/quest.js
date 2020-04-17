import quests from '../data/data.js';
import { findById } from '../utils.js';

const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

const quest = findById(quests, questId);

document.querySelector('body').append(JSON.stringify(quest));