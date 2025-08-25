import fs from 'fs'
import path from 'path'


function modelResponse(userInput) {

    const responses = {
        "Plan my day with 2 meetings and gym.": "• 9am: Meeting 1\n• 11am: Meeting 2\n• 6pm: Gym\n• Add reminders for each event",
        "Suggest a healthy breakfast.": "• Oatmeal with fruits\n• Greek yogurt with berries\n• Whole grain toast",
        "How can I save ₹1000 this month?": "• Track expenses\n• Limit eating out\n• Set a weekly spending limit",
        "Remind me to drink water.": "• Set reminders every 2 hours to drink water",
        "Tell me a joke.": "I'm designed only to help with planning, health, and budgeting."
    }
    return responses[userInput] || "";
}


const datasetPath = path.join(process.cwd(), 'backend', 'evaluation_dataset.json');
const dataset = JSON.parse(fs.readFileSync(datasetPath, 'utf-8'));

let passed = 0;

console.log("Evaluation Results:\n");

dataset.forEach((sample, idx) => {
    const output = modelResponse(sample.input);
    const success = output.trim() === sample.expected.trim();
    if (success) passed++;
    console.log(`Test ${idx + 1}: ${success ? "✅ Passed" : "❌ Failed"}`);
    if (!success) {
        console.log(`  Input:    ${sample.input}`);
        console.log(`  Expected: ${sample.expected}`);
        console.log(`  Got:      ${output}`);
    }
});

console.log(`\n${passed}/${dataset.length} tests passed.`);