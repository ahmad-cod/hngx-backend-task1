"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;
    if (!slack_name || !track) {
        return res.status(400).json({
            error: 'slack_name and track parameters are required',
        });
    }
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const utcTime = new Date().toISOString();
    const githubRepoUrl = 'https://github.com/username/repo';
    const githubFileUrl = `${githubRepoUrl}/blob/main/file_name.ext`;
    const response = {
        slack_name: slack_name,
        current_day: currentDay,
        utc_time: utcTime,
        track: track,
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200,
    };
    res.json(response);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});