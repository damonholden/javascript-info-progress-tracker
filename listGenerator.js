// The following code can be used to generate a list of all the tasks in the
// tutorial map, which can be found at https://javascript.info/?map.

// spreading below as `querySelectotAll` does not have `map` method on returnedd elements list.
const tutorial_items = [
  ...document.querySelectorAll(".tutorial-map-list__item"),
];
const tutorial_items_mapped_to_parts_and_sections_and_lessons_and_tasks =
  tutorial_items
    .map(map_turorial_item_to_part_title_and_sections_and_lessons_and_tasks)
    .join("\n");

function map_turorial_item_to_part_title_and_sections_and_lessons_and_tasks(
  part
) {
  const part_title = part.querySelector(".tutorial-map-list__title")?.innerHTML;

  return `\n## ${part_title}\n\n${[
    ...part.querySelectorAll(".tutorial-map-list-two__item"),
  ]
    .map(map_section_to_section_title_and_lessons_and_tasks)
    .join("\n\n")}`;
}

function map_section_to_section_title_and_lessons_and_tasks(section) {
  const section_title = section.querySelector(
    ".tutorial-map-list-two__link"
  )?.innerHTML;

  return `### ${section_title}\n\n${[
    ...section.querySelectorAll(".tutorial-map-list-three__item"),
  ]
    .map(map_lesson_to_lesson_title_and_tasks)
    .join("\n\n")}`;
}

function map_lesson_to_lesson_title_and_tasks(lesson) {
  const lesson_title = lesson.querySelector(
    ".tutorial-map-list-three__link"
  )?.innerHTML;

  const lesson_tasks = [
    ...lesson.querySelectorAll(".tutorial-map-list-four__link"),
  ];

  return `#### ${lesson_title}\n\n- [ ] Reading${
    lesson_tasks.length > 0
      ? `\n\n${convert_tasks_to_checklist_items(lesson_tasks)}`
      : ""
  }`;
}

function convert_tasks_to_checklist_items(lesson_tasks) {
  return `##### Tasks:\n\n${lesson_tasks
    .map((element) => `\t- [ ] ${element.innerHTML}`)
    .join("\n")}`;
}
