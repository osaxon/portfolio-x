export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "place",
            type: "string",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
            options: {
                list: [
                    { value: "hobby", title: "Hobby"},
                    { value: "client", title: "Client"},
                    { value: "bootcamp", title: "Bootcamp"},
                ],
            },
        },
        {
            name: "link",
            type: "url"
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                }
            ],
            options: {
                layout: "tags"
            },
        }
    ]
}