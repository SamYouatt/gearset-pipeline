import { createElement } from 'lwc';
import TestRunnerComponent from 'c/testRunnerComponent';

describe('c-test-runner-component', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('should say say Fantasic', () => {
        // Arrange
        const element = createElement('c-test-runner-component', {
            is: TestRunnerComponent
        });

        // Act
        document.body.appendChild(element);

        // Assert
        const paragraph = element.shadowRoot.querySelector('p');
        expect(paragraph.textContent).toBe('Fantasic');
    });
});