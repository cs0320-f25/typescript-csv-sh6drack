# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
code might produced unwanted output for:
empty columns
fields with quotes
commas inside quotes: "hello, world" would be two fields instead of one
there is no error handling? the parser doesn't tell you when/what something goes wrong
What if there is a trailing comma in the csv?

- #### Step 2: Use an LLM to help expand your perspective.

the LLM suggested many features I had not considered.

They suggested adding support for delimiters other than commas in tabs or semicolons or the like. Header row handling was a suggestion as we could treat the first row specifically as column names. Type conversion was suggested to automatically convert strings to numbers. Copilot also suggested escaped quotes to properly handle quotes within quoted fields(e.g "He said ""hello"""). They also suggested support for fields with embedded newlins and whitespace trimming. 

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

    Top 4 enhahncements:
    - Functionality: Handle Quoted Fields with Commas
    User Story: As a developer parsing CSV data, I want quoted fields containing commas to be trated as single fields so that "hello, world" becomes one value instead of being split into multiple fields. This way, I can correctly extract data like "Providence, RI" as a single field value.

    - Extensibility: Error Handling and Validation
    User Story: As a developer, I can receive detailed error messages when CSV parsing fails so that I can debug malformed files and provide helpful feedback to my users.

    - Extensibility: Schema Validation with Zod
    User Story: As a developer, I can specify the expected data types and structure for CSV rows so that I can automatically validate and convert data(like strings to numbers) without writing extra custom code.

    - Functionality: Header Row Handling
    User Story: As a developer, I can treat the first CSV row as column headers so that I can work with objects like {name: "Alice", age: 23} instead of arrays like ["Alice", "23"]. This will be much more useful as we can access person.name instead of array indexing all the time.


    The LLM provided many suggestions I had not considered. What resonated the most was the focus on making the parser more robust and flexible with error handling, header handling, and type conversion. Some suggestions like unicode encoding and comment lines felt a bit unnecesary for this sprint, while core functionality issues like the quoted fields took top priority.

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  
