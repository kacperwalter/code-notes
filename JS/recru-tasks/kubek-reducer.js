const section = sections[0];
const data: str[] = section.fields.map(field => ({ [`${section.name}_${field.name}`]: field.value }))


[]
[{ "string01_string1": "string3" }]
[{ "string01_string1": "string3" }, { "string01_string2": "string4" }]


[...[], ...[{ "string01_string1": "string3" }, { "string01_string2": "string4" }]]


```typescript
const stateToData: Record<string, string> = (sections: SectionInterface[]): Record<string, string> =>
	sections.reduce(
			(arr: SectionInterface[], section: SectionInterface): Record<string, string>[] => [
				...arr,
				...section.fields.map((field: FieldInterface): Record<string, string> => ({ [`${section.name}_${field.name}`]: field.value }))
			],
			[]
		)
		.reduce((obj: Record<string, string> , field: Record<string, string>) => ({ ...obj, ...field }), {});
```

const stateToData = sections => {
	return sections.map(section => {
  	section.fields.map(field => {{ `${section.name}_${field.name}`]: field.value }})
  })
}

[
  [{ "string01_string1": "string3" }, { "string01_string2": "string4" }],
  [{ "string02_string3": "string7" }, { "string02_string4": "string8" }]
]


{
	"string01_string1": "string3",
  "string01_string2": "string4",
	"string02_string5": "string7",
  "string02_string6": "string8"
}

[
  {
    name: 'string01',
    fields:
    [
      {name: 'string1', value: 'string3'},
      {name: 'string2', value: 'string4'},
    ]
  },
  {
    name: 'string02',
    fields:
    [
      {name: 'string5', value: 'string7'},
      {name: 'string6', value: 'string8'},
    ]
  }
]

-=------------
[],
==

{
	["string01_string1: string3"]
}