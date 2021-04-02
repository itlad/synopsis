/* This is part of the itlad/synopsis project.
 *
 * Additional modifications (c)2021 itlad
 *
 * Additional modifications (c)2020 Ian Morland
 *
 * Modified code (c)2019 Jordan Schnaidt
 *
 * Original code (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import app from 'flarum/app';

function typeOptions() {
    let opts;
    opts = ['first', 'last'].reduce((o, key) => {
        o[key] = app.translator.trans(`itlad-synopsis.admin.settings.${key}-label`);

        return o;
    }, {});
    return opts;
}

app.initializers.add('itlad-synopsis', () => {
    app.extensionData
        .for('itlad-synopsis')
        .registerSetting({
            label: app.translator.trans('itlad-synopsis.admin.settings.excerpt-label'),
            setting: 'itlad-synopsis.excerpt_length',
            type: 'number',
        })
        .registerSetting({
            label: app.translator.trans('itlad-synopsis.admin.settings.images-excerpt-enable'),
            setting: 'itlad-synopsis.images-excerpt_enable',
            type: 'boolean',
        })
        .registerSetting({
            label: app.translator.trans('itlad-synopsis.admin.settings.images-excerpt-length'),
            setting: 'itlad-synopsis.images-excerpt_length',
            type: 'number',
        })
        .registerSetting({
            label: app.translator.trans('itlad-synopsis.admin.settings.rich-excerpts'),
            setting: 'itlad-synopsis.rich-excerpts',
            type: 'boolean',
        })
        .registerSetting({
            label: app.translator.trans('itlad-synopsis.admin.settings.excerpt-type'),
            setting: 'itlad-synopsis.excerpt-type',
            options: typeOptions(),
            type: 'select',
        });
});
