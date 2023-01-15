// The following code can be used to generate a list of all the tasks in the
// tutorial map, which can be found at https://javascript.info/?map.

[...document.querySelectorAll('.tutorial-map-list__item')]
  .map(
    (element) =>
      `## ${element.querySelector('.tutorial-map-list__title')?.innerHTML}\n${[
        ...element.querySelectorAll('.tutorial-map-list-two__item'),
      ]
        .map(
          (element) =>
            `\n### ${
              element.querySelector('.tutorial-map-list-two__link')?.innerHTML
            }\n${[...element.querySelectorAll('.tutorial-map-list-three__item')]
              .map(
                (element) =>
                  `\n- [ ] ${
                    element.querySelector('.tutorial-map-list-three__link')
                      ?.innerHTML
                  }\n${
                    element.querySelectorAll('.tutorial-map-list-four__link')
                      .length > 0
                      ? `  - tasks:\n`
                      : ''
                  }${[
                    ...element.querySelectorAll(
                      '.tutorial-map-list-four__link',
                    ),
                  ]
                    .map((element) => `  - [ ] ${element.innerHTML}\n`)
                    .join('')}`,
              )
              .join('')}`,
        )
        .join('')}`,
  )
  .join('\n');
