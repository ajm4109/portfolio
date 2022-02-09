import {
  createClient,
  createPreviewSubscriptionHook,
  createImageUrlBuilder,
  createPortableTextComponent,
} from 'next-sanity';

const sanityConfig = {
  projectId: 'grlyqxfs', // found in sanity.json
  dataset: 'production', // found in sanity.json
  apiVersion: 'v2021-10-21', // found at https://www.sanity.io/docs/api-versioning
  useCdn: false,
};

export const sanityClient = createClient(sanityConfig);

export const usePreviewSubscription =
  createPreviewSubscriptionHook(sanityConfig);

export const urlFor = (source) =>
  createImageUrlBuilder(sanityConfig).image(source);

export const portableText = createPortableTextComponent({
  ...sanityConfig,
  serializers: {},
});
