import './buttons.css';
import resumePDF from './assets/personal-website-resume-fall24.pdf';

function buttons() {
    const handleLinkedinClick = () => 
    {
        window.open('https://www.linkedin.com/in/belinda-weng-bb192b230/','_blank')
    }

    const handleGithubClick = () =>
    {
        window.open('https://github.com/kwibaguete','_blank')
    }

    const handleResumeClick = () =>
    {
        window.open(resumePDF,'_blank')
    }

  return (
    <div class="buttons">
      <button onClick={handleResumeClick}>resume</button>
      <button onClick={handleLinkedinClick}>linkedin</button>
      <button onClick={handleGithubClick}>github</button>
    </div>
  );
}

export default buttons;
