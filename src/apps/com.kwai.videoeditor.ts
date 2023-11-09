import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kwai.videoeditor',
  name: '快影',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds:
        'com.kwai.videoeditor.activity.splash.InnerVideoSplashActivity',
      rules: ['Button[text="跳过"]'],
      snapshotUrls: 'https://i.gkd.li/import/import/12472610',
    },
  ],
});
