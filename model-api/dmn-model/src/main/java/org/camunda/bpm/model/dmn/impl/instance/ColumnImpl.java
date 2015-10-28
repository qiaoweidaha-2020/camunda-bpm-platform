/* Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.camunda.bpm.model.dmn.impl.instance;

import static org.camunda.bpm.model.dmn.impl.DmnModelConstants.DMN11_NS;
import static org.camunda.bpm.model.dmn.impl.DmnModelConstants.DMN_ELEMENT_COLUMN;

import org.camunda.bpm.model.dmn.instance.Column;
import org.camunda.bpm.model.dmn.instance.InformationItem;
import org.camunda.bpm.model.xml.ModelBuilder;
import org.camunda.bpm.model.xml.impl.instance.ModelTypeInstanceContext;
import org.camunda.bpm.model.xml.type.ModelElementTypeBuilder;
import org.camunda.bpm.model.xml.type.ModelElementTypeBuilder.ModelTypeInstanceProvider;

public class ColumnImpl extends InformationItemImpl implements Column {

  public ColumnImpl(ModelTypeInstanceContext instanceContext) {
    super(instanceContext);
  }

  public static void registerType(ModelBuilder modelBuilder) {
    ModelElementTypeBuilder typeBuilder = modelBuilder.defineType(Column.class, DMN_ELEMENT_COLUMN)
      .namespaceUri(DMN11_NS)
      .extendsType(InformationItem.class)
      .instanceProvider(new ModelTypeInstanceProvider<Column>() {
        public Column newInstance(ModelTypeInstanceContext instanceContext) {
          return new ColumnImpl(instanceContext);
        }
      });

    typeBuilder.build();
  }

}
