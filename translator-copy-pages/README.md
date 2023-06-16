<<<<<<< HEAD
# Translator-Copy-Pages

## Usage

To run the project, follow these steps:

1. Change the directory to the project folder: `cd translator-copy-pages`

2. Run the script using one of the following options:
- Translate and copy:
  ```
  node Translator-copy-pages.js <directory> <lang>
  ```
  Example:
  ```
  node Translator-copy-pages.js ../pages/protocol vi
  ```
- Copy only:
  ```
  node Translator-copy-pages.js <directory> <lang> -С
  ```

## Notes

- The translator does not process JSX code. For example: `<QuickLink title="FAQ" icon="installation" href="/faq" description="New to Rubicon? Visit our Frequently Asked Questions"></QuickLink>`

- The translator does not translate Markdown titles. For example: `--- title: Rubicon | Overview page Title: Overview description: Welcome to the Rubicon guides and developer documentation---`

## Known Issues

- The translator may cause issues with tables. For example:

| header0 | header1 |
| ------- | ------- |
| data1   | data2   |
| data3   | data4   |

=======
Usage:
  To run the project, follow these steps:
    1. Change the directory to the project folder: cd translator-copy-pages
    2. Run the script using one of the following options:
      a. Translate and copy: node Translator-copy-pages.js <directory> <lang>
         - Example: node Translator-copy-pages.js ../pages/protocol vi
      b. Copy only: node Translator-copy-pages.js <directory> <lang> -С

Notes:

  - The translator does not process JSX code. For example: '<QuickLink title="FAQ" icon="installation" href="/faq" description="New to Rubicon? Visit our Frequently Asked Questions"></QuickLink>'
  - The translator does not translate Markdown titles. For example:
    ---
    title: Rubicon | Overview
    page Title: Overview
    description: Welcome to the Rubicon guides and developer documentation
    ---

Known Issues:
  - The translator may cause issues with tables. For example:
    | header0 | header1 |
    | ------- | ------- |
    | data1   | data2   |
    | data3   | data4   |

Lanugages Currently Supported 
- ar
- en
- es 
- fa
- fr 
- hi 
- id
- ja
- ko
- ru
- vi
- zh
>>>>>>> master
