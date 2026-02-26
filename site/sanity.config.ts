import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'pearns-point',
  title: 'Pearns Point',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.listItem()
              .title('Pages')
              .child(
                S.list()
                  .title('Pages')
                  .items([
                    S.listItem()
                      .title('Homepage')
                      .child(S.document().schemaType('homePage').documentId('homePage')),
                    S.listItem()
                      .title('The Development')
                      .child(S.document().schemaType('developmentPage').documentId('developmentPage')),
                    S.listItem()
                      .title('Lots & Site Plan')
                      .child(S.document().schemaType('lotsSitePlanPage').documentId('lotsSitePlanPage')),
                    S.listItem()
                      .title('Plot & Plan')
                      .child(S.document().schemaType('plotAndPlanPage').documentId('plotAndPlanPage')),
                    S.listItem()
                      .title('The Villas')
                      .child(S.document().schemaType('villasPage').documentId('villasPage')),
                    S.listItem()
                      .title('Gallery')
                      .child(S.document().schemaType('galleryPage').documentId('galleryPage')),
                    S.listItem()
                      .title('The Antigua Experience')
                      .child(S.document().schemaType('antiguaPage').documentId('antiguaPage')),
                    S.listItem()
                      .title('Citizenship by Investment')
                      .child(S.document().schemaType('cbiPage').documentId('cbiPage')),
                    S.listItem()
                      .title('Contact')
                      .child(S.document().schemaType('contactPage').documentId('contactPage')),
                    S.listItem()
                      .title('Latest News')
                      .child(S.document().schemaType('newsPage').documentId('newsPage')),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('Blog Posts')
              .schemaType('blogPost')
              .child(S.documentTypeList('blogPost').title('Blog Posts')),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
